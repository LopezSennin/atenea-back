DECLARE
    v_id_patologia INTEGER;
    v_tipo_producto INTEGER;
BEGIN
    -- Crear una tabla temporal para almacenar los resultados
    CREATE TEMP TABLE resultados_temp (
        id_producto INTEGER,
        nombre VARCHAR
    );

    -- Obtener id_patologia del id_cliente en la tabla patologia
    SELECT id_patologia
    INTO v_id_patologia
    FROM patologia
    WHERE id_cliente = tu_id_cliente;

    -- Si se encontró una patología, buscar tipo_producto en la tabla alergia_patologia
    IF v_id_patologia IS NOT NULL THEN
        FOR v_tipo_producto IN
            SELECT tipo_producto
            FROM alergia_patologia
            WHERE id_patologia = v_id_patologia
        LOOP
            -- Si se encontró tipo_producto, listar productos que coincidan en la tabla producto
            IF v_tipo_producto IS NOT NULL THEN
                INSERT INTO resultados_temp
                SELECT id_producto, nombre
                FROM producto
                WHERE tipo = v_tipo_producto;
            ELSE
                RETURN QUERY SELECT NULL::INTEGER, 'No hay tipo_producto asociado';
            END IF;
        END LOOP;
    ELSE
        RETURN QUERY SELECT NULL::INTEGER, 'No se encontró patología para el cliente';
    END IF;

    -- Devolver los resultados acumulados
    RETURN QUERY SELECT * FROM resultados_temp;

    -- Eliminar la tabla temporal al final de la función
    DROP TABLE IF EXISTS resultados_temp;
END;

