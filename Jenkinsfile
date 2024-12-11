pipeline {
    agent any
    environment {
        USERNAME = "Siegfried"
    }
    stages {
        stage("build") {
            agent {
                docker {
                    label 'contenedores'
                    image 'node:22-alpine'
                    args '-v $WORKSPACE:/app'  // Asegura que el directorio del código esté montado
                }
            }
            stages {
                stage("build - instalación dependencias") {
                    steps {
                        sh 'npm install'
                    }
                }
                stage("build - ejecución de test") {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage("build - build del proyecto") {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage("Quality assurance") {
            agent {
                docker {
                    label 'contenedores'
                    image 'sonarsource/sonar-scanner-cli'
                    args '--network=devops-infra_default'
                }
            }
            stages {
                stage("Quality assurance - sonarqube") {
                    steps {
                        withSonarQubeEnv('sonarqube') {
                            sh 'sonar-scanner'
                        }
                    }
                }
                stage("Quality assurance - quality gate") {
                    steps {
                        script {
                            timeout(time: 1, unit: 'MINUTES') {
                                def qg = waitForQualityGate()
                                if (qg.status != 'OK') {
                                    error "Pipeline aborted due to quality gate failure: ${qg.status}"
                                }
                            }
                        }
                    }
                }
            }
        }
        stage("delivery - subida a nexus") {
            steps {
                script {
                    docker.withRegistry("http://localhost:8082", "registry") {
                        sh 'docker build -t backend-devops .'
                        sh 'docker tag backend-devops:latest localhost:8082/backend-devops:latest'
                        sh 'docker push localhost:8082/backend-devops:latest'
                    }
                }
            }
        }
    }
}
