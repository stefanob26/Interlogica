# Getting started

```
CREATE schema 'south-africa-mobile-numbers';

create table numbers
(
	number long not null,
	previous varchar(255) null,
	id long null
);
```

### Run application

open terminal in this folder and run command:

```
mvn spring-boot:run
```

### Run Test

open terminal in this folder and run command:

```
mvn test
```

### Install dependencies

open terminal in this folder and run command:

```
mvn install
```