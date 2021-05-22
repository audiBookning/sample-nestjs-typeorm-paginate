# Nestjs Typeorm paginate - Test

Just a little repo to test the [Nestjs Typeorm paginate](https://github.com/nestjsx/nestjs-typeorm-paginate) package.

## Notes

- The DB used is Posgresql.

- There is also a docker-compose file to be able to quickly start a Posgresql database without install on the operating system. The app was not put there as a service for a little more simplicity.

- To run the DB: `docker-compose up`.

- To execute the app: `npm run start:dev`.

- This project use a module to inject all the entities repositories for easiness in the latter use in others modules. but it may not be the best pattern.

- Accessing the `http://localhost:3000/seed` route will trigger a simple random seeding of the DB using faker.

## TODO

- Add tests
