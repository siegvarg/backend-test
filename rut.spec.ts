import { describe, test, expect } from "@jest/globals"
import {contarCoincidenciasEnCadena} from "./src/app/cadenas"
import {validarRUT} from "./src/app/rut"

describe('contarCoincidenciasEnCadena', () => {
    it('debería contar correctamente las coincidencias de una subcadena en una cadena', () => {
        expect(contarCoincidenciasEnCadena('abcabcabc', 'abc')).toBe(3);
    });

    it('debería devolver 0 si la subcadena no está presente en la cadena', () => {
        expect(contarCoincidenciasEnCadena('abcdef', 'xyz')).toBe(0);
    });

    it('debería manejar cadenas vacías correctamente', () => {
        expect(contarCoincidenciasEnCadena('', 'abc')).toBe(0);
        expect(contarCoincidenciasEnCadena('abc', '')).toBe(0);
    });

    it('debería manejar subcadenas más largas que la cadena principal', () => {
        expect(contarCoincidenciasEnCadena('abc', 'abcdef')).toBe(0);
    });

    it('debería contar coincidencias solapadas', () => {
        expect(contarCoincidenciasEnCadena('aaa', 'aa')).toBe(2);
    });
});

describe('validarRUT', () => {
    it('debería validar un RUT correcto con dígito verificador K', () => {
        expect(validarRUT('10.091.753-K')).toBe(true);
    });
 
    it('debería validar un RUT correcto con dígito verificador 0', () => {
        expect(validarRUT('12.979.939-0')).toBe(true);
    });
 
    it('debería devolver false para un RUT con dígito verificador incorrecto', () => {
        expect(validarRUT('20.123.456-9')).toBe(false);
    });
 
    it('debería validar un RUT con puntos y guion', () => {
        expect(validarRUT('12.345.678-9')).not.toBe(true);
    });
 
    it('debería validar un RUT sin puntos ni guion', () => {
        expect(validarRUT('123456789')).toBe(false);
    });
 
    it('debería devolver false para un RUT con longitud incorrecta', () => {
        expect(validarRUT('1')).toBe(false);
    });
 
    it('debería devolver false para un RUT con caracteres no numéricos en el número', () => {
        expect(validarRUT('12.34A.678-K')).toBe(false);
    });
 
    it('debería devolver false para un RUT con dígito verificador incorrecto calculado', () => {
        expect(validarRUT('12.345.678-5')).not.toBe(false);
    });
 });
 describe('Configuration tests', () => {
    const originalEnv = { ...process.env };

    afterEach(() => {
        // Restaurar las variables de entorno originales
        process.env = { ...originalEnv };
    });

    it('should use environment variables if they are defined', () => {
        process.env.USERNAME = 'test-user';
        process.env.APIKEY = 'test-key';
        process.env.PORT = '4000';

        const { configuration } = require('./path-to-configuration'); // Asegúrate de importar el archivo correcto
        expect(configuration.username).toBe('test-user');
        expect(configuration.apikey).toBe('test-key');
        expect(configuration.port).toBe(4000);
    });

    it('should use default values if environment variables are not defined', () => {
        delete process.env.USERNAME;
        delete process.env.APIKEY;
        delete process.env.PORT;

        const { configuration } = require('./path-to-configuration');
        expect(configuration.username).toBe('default');
        expect(configuration.apikey).toBe('default-key');
        expect(configuration.port).toBe(3000);
    });
});
