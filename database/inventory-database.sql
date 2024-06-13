CREATE SEQUENCE event_seq;

CREATE TABLE employees (
    employee_id text,
    username text UNIQUE,
    "password" text NOT NULL,
    email text UNIQUE,
    first_name text NOT NULL,
    last_name text,
    department text,
    position text,
    employment_type text NOT NULL,
    PRIMARY KEY (employee_id)
);

CREATE TABLE meters (
    meter_serial text,
    manufacturer text NOT NULL,
    store_region text NOT NULL,
    "size" smallint,
    "type" text,
    model text,
    date_added timestamp,
    PRIMARY KEY (meter_serial)
);

CREATE TABLE tracking (
    event_id bigint NOT NULL DEFAULT NEXTVAL ('event_seq'),
    employee_id text,
    meter_serial text,
    event_type char(3) NOT NULL,
    tracking_id text GENERATED ALWAYS AS (generate_tracking_id(event_type, event_id)) STORED,
    "timestamp" timestamp,
    source text,
    destination text,
    "status" text,
    PRIMARY KEY (event_id),
    CONSTRAINT "FK_tracking.meter_serial"
        FOREIGN KEY (meter_serial)
        REFERENCES meters(meter_serial),
    CONSTRAINT "FK_tracking.employee_id"
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
);

CREATE TABLE customers (
    customer_id text,
    username text UNIQUE,
    "password" text,
    email text UNIQUE,
    first_name text NOT NULL,
    last_name text,
    "address" text,
    ic_no text UNIQUE,
    phone_no text,
    age smallint,
    PRIMARY KEY (customer_id)
);

CREATE TABLE "returns" (
    return_id text PRIMARY KEY,
    meter_serial text,
    reason text NOT NULL,
    application_date text,
    "status" text,
    FOREIGN KEY (meter_serial)
    REFERENCES meters (meter_serial)
);

CREATE VIEW supply_by_region AS
    SELECT store_region AS region, COUNT(*) AS no_of_meters 
    FROM meters
    GROUP BY region;

CREATE VIEW reasons_for_returns AS
    SELECT reason, COUNT(*) * 100 / sum(count(*)) over () AS "percentage"
    FROM "returns"
    GROUP BY reason
    ORDER BY "percentage" DESC;

CREATE VIEW returns_rate_by_manufacturer AS
    SELECT manufacturer, COUNT(*) * 100 / sum(count(*)) over () AS "return_rate"
    FROM "returns"
    INNER JOIN meters USING (meter_serial)
    GROUP BY manufacturer;

--not tested yet
/* 
CREATE VIEW supply_demand AS
    SELECT to_char(date_added, 'Month') AS "month", COUNT(*) AS supply
    FROM meters
    GROUP BY meters.date_added
    UNION 
    SELECT to_char(installation_date, 'Month') AS "month", COUNT(*) AS demand
    FROM installations
    WHERE "status"
    GROUP BY installations.installation_date;
*/ 


