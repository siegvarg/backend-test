pipeline {
    agent any

    stages {
        // Etapa para instalar dependencias
        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                script {
                    // Si estás utilizando npm para un proyecto Node.js
                    sh 'npm install'
                    // Si estás utilizando otro gestor de dependencias, reemplaza el comando anterior
                }
            }
        }

        // Etapa para ejecutar las pruebas
        stage('Testing') {
            steps {
                echo 'Ejecutando pruebas...'
                script {
                    // Ejecuta las pruebas, por ejemplo con npm para un proyecto Node.js
                    sh 'npm test'
                    // Si utilizas otro marco de pruebas, ajusta el comando correspondiente
                }
            }
        }

        // Etapa para construir la aplicación
        stage('Build') {
            steps {
                echo 'Construyendo la aplicación...'
                script {
                    // Comando para construir la aplicación, por ejemplo para un proyecto Node.js
                    sh 'npm run build'
                    // Si estás construyendo en otro entorno, ajusta este paso según sea necesario
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado exitosamente.'
        }
        failure {
            echo 'El pipeline ha fallado.'
        }
    }
}

