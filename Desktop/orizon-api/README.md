# Orizon API - Turismo Responsabile 🌍

Benvenuti nel progetto **Orizon**, un'API RESTful sviluppata per un'agenzia di viaggi focalizzata sulla sostenibilità e l'impatto positivo sulle comunità locali. 

Questo progetto è stato realizzato come elaborato per il Master, seguendo i principi dell'architettura REST e utilizzando le migliori pratiche di sviluppo con Node.js.

## 🚀 Funzionalità

L'applicativo gestisce tre entità principali con relazioni dinamiche:
- **Utenti**: Gestione completa dell'anagrafica viaggiatori (Nome, Cognome, Email, CF, ecc.).
- **Prodotti**: Gestione dei pacchetti viaggio, con supporto per offerte **Last Minute**.
- **Ordini**: Sistema di prenotazione che collega utenti e prodotti, con filtri avanzati per data e destinazione.

## 🛠 Tech Stack

- **Runtime**: Node.js (v24.14.1)
- **Framework**: Express.js
- **Database**: MongoDB Atlas (Cloud)
- **ODM**: Mongoose (per la modellazione dei dati e protezione NoSQL Injection)
- **Ambiente**: Variabili d'ambiente gestite con `dotenv`

## 📂 Struttura del Progetto

```text
orizon-api/
├── src/
│   ├── controllers/    # Logica di business
│   ├── models/         # Schemi del database (Mongoose)
│   └── routes/         # Definizione degli endpoint REST
├── app.js              # Punto di ingresso dell'applicazione
├── .env                # Variabili sensibili (non incluso nel repo)
└── package.json        # Dipendenze e script