#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'yarn'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Running...'
                sh 'yarn start'
            }
        }
    }
}