# 🧪 Stein: Frankenstein Lab

## 🎯 Objetivo
Em vez de construir pequenos projetos superficiais, o **Stein** consolida em um único ecossistema monolítico modular diversos padrões avançados usados em aplicações de grande escala. O foco principal é sair da teoria e descobrir os gargalos e *edge cases* no processo.

---

## 🏗️ Arquitetura do Sistema

O projeto adota a estratégia de **Monólito Modular** com um **Worker Isolado**, integrado a um **Dashboard Frontend Único** e sustentado por infraestrutura conteinerizada.

```text
stein/
├── backend/                       # API Central & Lógica de Negócio (Monólito Modular)
│   ├── src/
│   │   ├── modules/
│   │   │   ├── streams/          # Ingestão de dados em chunks, pipelines e SSE
│   │   │   ├── queues/           # Produtores de mensagens e publicação de eventos
│   │   │   ├── rate-limit/       # Middlewares customizados com Redis & scripts Lua
│   │   │   ├── websocket/        # Gateways WS e distribuição via Redis Pub/Sub
│   │   │   └── security/         # Endpoints para testes de carga, ReDoS e validações
│   │   │
│   │   ├── workers/              # Processador de tarefas pesadas em background
│   │   │   └── queue.worker.ts   # Consumidor isolado com estratégias de retry/DLQ
│   │   │
│   │   ├── shared/               # Clientes Redis, Postgres, logger e middlewares
│   │   └── server.ts             # Bootstrapping do Fastify/Express + Server WS
│   └── package.json
│
├── frontend/                      # Dashboard de Monitoramento Interativo (SPA)
│   ├── src/
│   │   ├── pages/                # Painéis visuais para interagir com cada módulo
│   │   │   ├── streams.vue       # Upload/Download de arquivos massivos & consumo de RAM
│   │   │   ├── queues.vue        # Disparo de jobs, métricas e Dead Letter Queue (DLQ)
│   │   │   ├── rate-limit.vue    # Simulador de rajadas de requisições (429)
│   │   │   ├── websocket.vue     # Chat e eventos em tempo real com instâncias WS
│   │   │   └── security.vue      # Painel de testes de resiliência e estresse
│   │   └── services/             # Clientes HTTP e Handlers de WebSocket
│   └── package.json
│
├── infra/                         # Infraestrutura Local de Apoio
│   └── docker-compose.yml        # Instâncias de Redis, RabbitMQ e Banco de Dados
│
└── README.md

```

O Stein também não esta preso a essa stack inicial, o objetivo é ir aumentando a complexidade ao longo do tempo e contornando os desafios utilizando as melhores soluções para cada cenário ponderando cada trade-off.