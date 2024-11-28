# aplicativo-gitlab-cicd

O que foi feito:
Estruturação do Repositório:

Criação de duas filiais: docker-deploye `k8s-deploy, cada uma com
Docker de pipeline ( docker-deploy):

Construção da Imagem Docker: EUADockerfileconfiguração
Envio ao Registro: PublRegistro de contêiner do GitLab .
Execução do Contêiner: Depl
Pipeline do Kubernetes ( k8s-deploy):

Construção e Envio da Imagem:Mesmo proc
Implante sem Kubernetes: Configurardeployment.yamlpara gerar
Configuração de Arquivos:

.gitlab-ci.yml: Arquivo debuild, pushe deploy.
Dockerfile: C
k8s/deployment.yaml: Configuração
Automatização via GitLab CI/CD:

Configuração de variáveis ​​de a
Como diversão
Filial docker-deploy: Automóvel
Filial k8s-deploy: Gerencia o deploy
Objetivo do Projeto:
Automatizar e otimizar o processo de implantação utilizando ferramentas modernas.
