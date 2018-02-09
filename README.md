# Albert Kennedy Trust

inter-AKT: Connecting young people within the LBGT community to digital mentors.

### Running our project locally

**Requirements**

PostgreSQL, Node

**Installation**

```
git clone https://github.com/fac-12/Albert-Kennedy.git && cd Albert-Kennedy && npm i
```

And then:

```
cd client && npm i
```

Create a `config.env` file in the root directory with the following environment variables:

* `DATABASE_URL=`[a url to a PostgreSQL Database, setup with our `db_build.sql`]
* `SECRET=`[a secret sequence of letters / numbers for signing JWT tokens]

**Run a Dev Server**

```
npm run dev
```
