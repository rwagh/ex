FROM public.ecr.aws/bitnami/node:16.16.0
ENV NODE_ENV production
ENV PORT 80
ENV SECRET_KEY zxZǝɬ
ENV COOKIE_SECRET zxZǝɬ
ENV ACCESS_TOKEN_SECRET uw30lPoyFh
ENV ACCESS_TOKEN_LIFE 1200
ENV REFRESH_TOKEN_SECRET OHXYEvnIvzwky2s0ectYRHXpmPTiUD9p
ENV REFRESH_TOKEN_LIFE 86400

ENV CASSANDRA_IP cassandra.us-west-2.amazonaws.com
ENV CASSANDRA_PORT 9142
ENV CUSER  ProgrammaticAccess-at-917873686858
ENV PASS 9h+aCD/oxbTNVTd1g1JvSX0iEPkjTr7bMa1FhfvgUlc=
ENV DATACENTER us-west-2
ENV KEYSPACE evolve

ENV EXR_URL https://data.fixer.io/api/latest?access_key=308232feffc419a48f7f0cbd8579bebe&base={0}

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 80
CMD npm start