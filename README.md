# BACKEND: NODE, PRISMA, DOCKER

Instruções de instalação/configuração deste projeto backend

## PASSOS INICIAIS

Inicie o projeto com:
```
yarn
```

Após isso configure o arquivo abaixo, definindo nome do container, portas, usuario e senha,:

```
docker-compose.yml
```

Configure o env:

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/mydb?schema=public"
TOKEN_KEY="seu token"
AUTH_KEY
```

Faça a build o seu projeto:

```
yarn build
```

Agora é só iniciar o Docker e iniciar o prisma!:

```
docker-compose up -d
npx prisma migrate dev
```

### INFORMAÇÕES UTEIS!

➡️ tsconfig.json está configurado para o es2016
➡️ tsconfig.json está com o rootDir configurado para "/"
➡️ Outras configs ativas no tsconfig.json: "resolveJsonModule": true | "outDir": "build" | "esModuleInterop": true | "forceConsistentCasingInFileNames": true