# 📘 Log Viewer API

A lightweight REST API for viewing and submitting application logs. Supports filtering by timestamp and metadata fields.

---

## 🚀 How to run
### 1. npm i
### 2. node app.js


## 🚀 Endpoints

### 1. `GET /logs`

Retrieve logs with optional filtering.

#### 🔍 Query Parameters

| Parameter         | Type     | Description                                      |
|------------------|----------|--------------------------------------------------|
| `timestamp_start`| `string` | ISO 8601 start time (e.g. `2023-08-01T00:00:00Z`)|
| `timestamp_end`| `string` | ISO 8601 start time (e.g. `2023-08-01T00:00:00Z`)|
| `message`  | `string` | Primary log message                                     |
| `level`          | `string` | Log level (e.g. `info`, `error`, `debug`, `warn`)        |
| `resourceId`         | `string` | The identifier of the resource that generated the log (e.g., a server name, container ID).                   |
| `traceId`         | `string` | Unique identifier used to corelate the logs                 |
| `spanId`         | `string` | Unique identifier for aspecific operation                 |
| `commit`         | `string` | git commit number                 |

#### 📦 Example Request

```http
GET /logs?level=error&timestamp_start=2023-08-01T00:00:00Z&timestamp_end=2023-08-10T00:00:00Z
```

### 2. `POST /logs`

Insert logs with proper iltering.

#### 🔍 request body

| Parameter         | Type     | Description                                      |
|------------------|----------|--------------------------------------------------|
| `timestamp`| `string` | ISO 8601 start time (e.g. `2023-08-01T00:00:00Z`)|
| `message`  | `string` | Primary log message                                     |
| `level`          | `string` | Log level (e.g. `info`, `error`, `debug`, `warn`)        |
| `resourceId`         | `string` | The identifier of the resource that generated the log (e.g., a server name, container ID).                   |
| `traceId`         | `string` | Unique identifier used to corelate the logs                 |
| `spanId`         | `string` | Unique identifier for aspecific operation                 |
| `commit`         | `string` | git commit number                 |
| `metadata`         | `string` | A nested JSON object containing additional, unstructured context relevant to the log entry.  |

#### 📦 Example Request

```http
POST /logs?timestamp_end=2025-08-15T09:00:00Z&level=debug HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 305

{
    "level": "warn",
    "message": "Failed to connect to database.",
    "resourceId": "server-1234",
    "timestamp": "2025-08-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-5678"
    }
}
```