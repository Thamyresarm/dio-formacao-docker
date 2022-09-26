# Formação Docker 

Tentarei expor o máximo de informações possíveis sobre Docker e Docker Compose para auxiliar no aprendizado.

![image](https://user-images.githubusercontent.com/24790794/192305550-13571a03-3837-45ff-924c-ab59d32f2354.png)

## Principais comandos

> Levantar uma imagem: 

- docker run NOMEDAIMAGEM:TAG 
(tag é a versão que deseja, caso nao insira sera baixado a mais recente)


> Levantar uma imagem dando apelido a mesma: 

- docker run --name APELIDO NOMEDAIMAGEM:TAG

exemplo: docker run --name php-B php:7.4-apache


> -d define a execução em segundo plano

- docker run --name APELIDO -d NOMEDAIMAGEM:TAG

exemplo: docker run --name php-B -d php:7.4-apache


> -p define altera a porta

- docker run --name APELIDO -p 8080:80 NOMEDAIMAGEM:TAG

exemplo: docker run --name php-B -p 8080:80 php:7.4-apache


> --volume faz referencia localmente para que as informações do doker nao se percam

- docker run --name APELIDO --volume=/data/php-A:/var/www/html NOMEDAIMAGEM:TAG

exemplo: docker run --name php-B --volume=/data/php-A:/var/www/html php:7.4-apache


> exemplo completo: 

- exemplo: docker run --name php-B -d -p 8080:80 --volume=/data/php-A:/var/www/html php:7.4-apache



> Acessar o docker: 

- docker exec -it APELIDO /bash


> Sair do Docker:

- Exit


> Para a execução do Docker: 

- docker stop APELIDO


> Listar detalhes de Docker existentes: 

- docker ps


> Remover Docker:

- docker rm APELIDO (é necessário estar parado para usar esse comando) 


> Listar detalhes de imagens existentes localmente:

- docker images


> Remover as imagens para nao ocupar espaço

- docker rmi NOMEDAIMAGEM


> Levantar imagem de banco de dados: 

 - docker run -e MYSQL_ROOT_PASSWORD=1234 --name MySql-DOCK -d -p 3305:3305 mysql
 
 (para BD precisa passar uma variável de ambiente por questões de usuário e senha)


> Copiar arquivo do local até o docker SEM acessar: 

- docker cp NOMEDOARQUIVO APELIDO:CAMINHONODOCKER

exemplo: docker cp index.html php-B:var/www/html


> Executar uma instalação SEM acessar: 

- docker exec -ti APELIDO COMANDODEINSTALAÇÃO

exemplo: docker exec -ti Ubuntu-python apt install -y python3



