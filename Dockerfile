FROM node:lts-alpine

ENV UID=1000
ENV GID=1000
ENV BUILD_ENV=development

WORKDIR /app/

RUN apk update && \
  apk add \
  build-base \
  libpng \
  libpng-dev \
  libtool \
  autoconf \
  automake \
  jq \
  openssh \
  python \
  zlib-dev \
  nasm

COPY . /app/

RUN rm -rf node_modules   package-lock.json > /dev/null 2>&1

RUN npm install pm2 -g

RUN npm i --${BUILD_ENV}

RUN npm run build:${BUILD_ENV}

# Clear extra files from we just need dist
RUN find . ! -path '**/dist' ! -path '**/process.yml' -maxdepth 1 -exec rm -f -r {} + > /dev/null 2>&1 | echo 'OK'

# Remove build installs
RUN apk del \
  build-base \
  libpng \
  libpng-dev \
  libtool \
  autoconf \
  automake \
  jq \
  openssh \
  python \
  zlib-dev \
  nasm && \
  rm -rf /var/cache/apk/*

CMD ["pm2-runtime", "process.yml"]
