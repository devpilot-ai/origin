# ADR 0005: Database Strategy

## Status
Accepted

## Context
Need flexible persistence strategy for transactional, document, and caching use cases.

## Decision
Use PostgreSQL as primary system of record; reserve MongoDB and Redis by bounded context.

## Consequences
Balances operational simplicity with future specialized data workloads.
