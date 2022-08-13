# prisma-tracing-sandbox

sandbox repository for [Prisma OpenTelemetry tracing](https://www.prisma.io/docs/concepts/components/prisma-client/opentelemetry-tracing)

# How to run

run Jaeger container

```
docker run -d --name jaeger \
        -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \
        -p 5775:5775/udp \
        -p 6831:6831/udp \
        -p 6832:6832/udp \
        -p 5778:5778 \
        -p 16686:16686 \
        -p 14268:14268 \
        -p 9411:9411 \
        jaegertracing/all-in-one:1.6
```

```
npx ts-node ./main.ts
```

access `http://localhost:16686/search`
