import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';
import { EVK, NODE_ENV } from '../__helpers__';

export function createSwaggerDocs(
  app: INestApplication,
  envConfig,
  environment
) {
  if (environment === NODE_ENV.STAGE)
    app.use(
      ['/docs', '/docs-json'],
      basicAuth({
        challenge: true,
        users: {
          [envConfig.get(EVK.SWAGGER_USER)]: envConfig.get(
            EVK.SWAGGER_PASSWORD
          ),
        },
      })
    );

  const config = new DocumentBuilder()
    .setTitle('Gift APIs')
    .setDescription('The API docs for Gift')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'access-token'
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}
