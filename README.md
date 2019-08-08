# API de Perfis do Linkedin com Ranking - DevLake

- Pegar perfis baseado na busca do usuario
- Mostrar perfis com rankeamento
- Criar agenda com contato (email, telemovel) dos perfis

## Infra

### MVP 

- [x] MongoDB Atlas
- [x] AWS
- [x] Lambas
- [ ] SQS
- [ ] React no S3

### Nice to have

- [ ] CD Github
- [ ] Elasticsearch, irá facilitar o rankeamendo
- [ ] Kafka
- [ ] Middy
- [ ] standardjs
- [ ] jsonschema
- [ ] epsagon

## Features

- [x] Serverless
- [ ] Connection
- [ ] Models
- [ ] Functions

### API

- [ ] Cadastro de pesquisa
- [ ] Lista das pesquisas com status
- [ ] Retorno de pesquisa rankeada

### Datalake

- [ ] Fazer buscar no google e salvar as 100 primeiras URL's linkedin
- [ ] Garantir que a URL não seja duplicada
- [ ] Garantir que somente url do linkedin seja cadastrada
- [ ] Atualizar urls com informações do linkedin
- [ ] Criar um ranking de experiencia profissional
- [ ] Criar um ranking de educação profissional
- [ ] Criar um ranking de taxa de permanencia

### Front

- [ ] Cadastro de pesquisa
- [ ] Lista de pesquisas com status
- [ ] Lista de perfis
- [ ] Detalhe do perfil com contato
- [ ] Perfis excluidos da pesquisa
- [ ] Perfis selecionadso da pesquisa
