FROM node:8-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install && npm cache clean --force
COPY . /app/
RUN ./node_modules/.bin/gulp build



FROM node:8-alpine
WORKDIR /app
ENV NODE_ENV production
COPY package.json /app/
RUN npm install && npm cache clean --force
COPY --from=0 /app/dist /app/dist
RUN ls -ltra
USER node
EXPOSE 8080
CMD [ "node", "dist" ]

# WORKDIR /app
#
# FROM dtr.metlife.com/9498-gssp-platform/remix-application-template:build-multi-1.6.12
#
# FROM usaze-nonprod.dtr.metlife.com/9498-gssp-patterns/ui-application-template:latest
# WORKDIR /gssp/app
# COPY --from=0 /root/.npmrc /root/.npmrc
# COPY package.json /gssp/app/
# RUN npm install && npm cache clean --force
#
# COPY --from=0 /gssp/app/metadata /gssp/app/metadata
# COPY --from=0 /gssp/app/dist /gssp/app/dist
# COPY  _mock /gssp/app/_mock
# COPY  _workflows /gssp/app/_workflows
# USER node
# EXPOSE 8080
# CMD [ "node", "dist" ]
#
#
# ENV NODE_ENV production
# RUN apk add --no-cache bash curl tzdata
# RUN apk --no-cache add msttcorefonts-installer fontconfig && \
#     update-ms-fonts
#
# RUN chown node:node -R /var/log
# ENV CHROME_BIN="/usr/bin/chromium-browser" \
#     PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
# RUN set -x \
#     && apk update \
#     && apk upgrade \
#     && apk add --no-cache \
#     udev \
#     ttf-freefont \
#     chromium
