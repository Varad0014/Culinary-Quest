pipeline {
    
    environment{
        frontend_docker_image = ""
        backend_docker_image = ""
    }
    agent any
    stages {
        stage('Stage 1: Git Clone') {
            steps {
                git branch : 'main',
                url:'https://github.com/Varad0014/Culinary-Quest.git'
            }
        }
        stage('Step 2: Build Frontend Docker Image')
        {
            steps{
                dir('frontend') {
                    script{
                        frontend_docker_image = docker.build 'tejdocker32/frontend-img:latest'
                    }
                }
            }
        }
        stage('Stage 3: Test and Build Backend Docker Image')
        {
            steps{
                dir('backend') {
                    script{
                        backend_docker_image = docker.build 'tejdocker32/backend-img:latest'
                    }
                }
            }
        }
        stage('Stage 4: Push docker image to hub')
        {
            steps{
                    script{
                        docker.withRegistry('', 'docker'){
                        frontend_docker_image.push()
                        backend_docker_image.push()
                        }
                    }
            }
        }
        stage('Stage 5: Clean docker images')
        {
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Stage 6: Ansible Deployment')
        {
            steps{
                
                    ansiblePlaybook becomeUser: null,
                    colorized: true,
                    credentialsId: 'localhost',
                    disableHostKeyChecking: true,
                    installation: 'Ansible',
                    inventory: 'Deployment/inventory',
                    playbook: 'Deployment/playbook.yml',
                    sudoUser: null

                
            }
        }
    }
}