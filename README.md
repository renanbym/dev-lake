# API de Perfis do Linkedin com Ranking - DevLake

- Pegar perfis baseado na busca do usuario
- Mostrar perfis com rankeamento
- Criar agenda com contato (email, telemovel) dos perfis

## Infra

### MVP 

- [x] MongoDB Atlas
- [x] AWS
- [x] Lambas
- [x] SQS
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
- [x] Connection
- [x] Models
- [x] Functions
- [ ] Criar um ranking de experiencia profissional
- [ ] Criar um ranking de educação profissional
- [ ] Criar um ranking de taxa de permanencia

### API

- [x] Cadastro de pesquisa
- [ ] Lista das pesquisas com status
- [x] Lista Perfils
- [x] Detalhe Perfil
- [ ] Retorno de perfil com ranking

### Datalake

- [x] Fazer buscar no google e salvar as 100 primeiras URL's linkedin
- [x] Garantir que a URL não seja duplicada
- [x] Garantir que somente url do linkedin seja cadastrada
- [x] Atualizar urls com informações do linkedin


### Front

- [ ] Cadastro de pesquisa
- [ ] Lista de pesquisas com status
- [ ] Lista de perfis
- [ ] Detalhe do perfil com contato
- [ ] Perfis excluidos da pesquisa
- [ ] Perfis selecionadso da pesquisa
