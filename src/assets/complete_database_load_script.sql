-- SCHEMA: public

DROP SCHEMA IF EXISTS public CASCADE;

CREATE SCHEMA IF NOT EXISTS public;

COMMENT ON SCHEMA public
    IS 'standard public schema';

GRANT ALL ON SCHEMA public TO public;

-- voor eerste keer
DROP TABLE IF EXISTS public.campaign_domain CASCADE ;
DROP TABLE IF EXISTS public.campaign_platform CASCADE ;


-- EMPLOYEE ROLE
DROP TABLE IF EXISTS public."social_media_account" CASCADE ;
DROP TABLE IF EXISTS public."influencer " CASCADE ;
DROP TABLE IF EXISTS public.influencer_domain CASCADE ;
DROP TABLE IF EXISTS public."social_media_platform" CASCADE ;
DROP TABLE IF EXISTS public.domain CASCADE ;
DROP TABLE IF EXISTS public.submission CASCADE ; 
DROP TABLE IF EXISTS public.submission_status CASCADE ; 
DROP TABLE IF EXISTS public.campaign CASCADE ;
DROP TABLE IF EXISTS public.campaign_status CASCADE ;
DROP TABLE IF EXISTS public.employee CASCADE ;
DROP TABLE IF EXISTS public."user" CASCADE ;
DROP TABLE IF EXISTS public.location CASCADE ;
DROP TABLE IF EXISTS public.employee_role CASCADE ;
CREATE TABLE IF NOT EXISTS public.employee_role
(
    "role_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "name" text COLLATE pg_catalog."C" NOT NULL,
    CONSTRAINT "medewerkerRol_pkey" PRIMARY KEY ("role_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.employee_role
    owner to cityinfluencer;
INSERT INTO public.employee_role(
	 name)
	VALUES ( 'admin'),
	 ( 'IT department'),
	 ( 'administrator'),
	 ( 'accountancy'),
	 ( 'external');

--LOCATION
CREATE TABLE IF NOT EXISTS public.location
(
    "location_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
	name text COLLATE pg_catalog."default" NOT NULL,
    "postal_code" integer NOT NULL,
    CONSTRAINT "Locatie_pkey" PRIMARY KEY ("location_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.location
    owner to cityinfluencer;
INSERT INTO public.location(
	name, "postal_code")
	VALUES ( 'Geel', 2440),
	 ( 'Hasselt', 3500),
	 ( 'Genk', 3600),
	 ( 'Brussel', 1000),
	 ( 'Heusden-Zolder', 3550);





--USER
CREATE TABLE IF NOT EXISTS public."user"
(
    "user_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    "first_name" text COLLATE pg_catalog."C" NOT NULL,
    "last_name" text COLLATE pg_catalog."C" NOT NULL,
    "user_name" text COLLATE pg_catalog."C" NOT NULL,
    "birth_date" date NOT NULL,
    "location_id" integer NOT NULL,
    CONSTRAINT gebruiker_pkey PRIMARY KEY ("user_id"),
    CONSTRAINT "location_id_fk" FOREIGN KEY ("location_id")
        REFERENCES public.location ("location_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."user"
    owner to cityinfluencer;
INSERT INTO public."user"(
	 email, password, "first_name", "last_name", "user_name", "birth_date", "location_id")
	VALUES ('jan.janssens@gmail.com', 'changeme', 'Jan', 'Janssens', 'janjanssens', '01-03-1979', 1),
	('ben.helders@hotmail.com', 'changeme', 'Ben', 'Helders', 'benhelders', '04-04-1991', 2),
	('Sofie.Degroot@outlook.com', 'changeme', 'Sofie', 'Degroot', 'sofiedegroot', '09-09-2000', 3),
	('hans.jaspers@gmail.com', 'changeme', 'Hans', 'Jaspers', 'hansjaspers', '04-04-1961', 4),
	('Kelly.Lemmens@heusdenzolder.be', 'changeme', 'Kelly', 'Lemmens', 'kellylemmens', '20-02-1980', 5),
    ('koenKraemers@gmail.com', 'changeme', 'Koen', 'Kraemers', 'koenkraemers', '12-03-1987', 1),
    ('jonas.vanbergen@hotmail.com', 'changeme', 'Jonas', 'Van Bergen', 'jonasvanbergen', '09-05-1999', 1),
    ('Sofie.vanhoof@outlook.com', 'changeme', 'Sofie', 'Van Hoof', 'sofievanhoof', '10-09-2000', 3),
    ('Christiano.Breugels@gmail.com', 'changeme', 'Christiano', 'Breugels', 'christianobreugels', '07-02-2002', 4),
    ('Cindy.Lemmens@heusdenzolder.be', 'changeme', 'Cindy', 'Lemmens', 'cindylemmens', '08-03-1997', 5);





--EMPLOYEE
CREATE TABLE IF NOT EXISTS public.employee
(
    "employee_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "user_id" integer NOT NULL,
    "role_id" integer NOT NULL,
    CONSTRAINT medewerker_pkey PRIMARY KEY ("employee_id"),
    CONSTRAINT "user_id" FOREIGN KEY ("user_id")
        REFERENCES public."user" ("user_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "rol_id_fk" FOREIGN KEY ("role_id")
        REFERENCES public.employee_role ("role_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.employee
    owner to cityinfluencer;
INSERT INTO public.employee(
	 "user_id", "role_id")
	VALUES ( 5, 1),
	 ( 4, 2),
	 ( 3, 3),
	 ( 2, 4),
	 ( 1, 5);





--CAMPAIGN STATUS
CREATE TABLE IF NOT EXISTS public.campaign_status
(
    "status_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT campaign_status_pkey PRIMARY KEY ("status_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.campaign_status
    owner to cityinfluencer;
INSERT INTO public.campaign_status(
	name)
	VALUES ( 'opgeslagen'),
	( 'gepubliceerd'),
	( 'in afwachting'),
	( 'afgerond');


	
--SOCIAL MEDIA PLATFORM
CREATE TABLE IF NOT EXISTS public."social_media_platform"
(
    "social_media_platform_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."C" NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "mediaPlatform_pkey" PRIMARY KEY ("social_media_platform_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."social_media_platform"
    OWNER to cityinfluencer;
INSERT INTO public."social_media_platform"(
	name, url)
	VALUES ( 'Twitter' , 'https://twitter.com'),
	( 'facebook', 'https://www.facebook.com/'),
	( 'instagram' , 'https://www.instagram.com/'),
	( 'TikTok', 'https://www.instagram.com/');




--DOMAIN
CREATE TABLE IF NOT EXISTS public.domain
(
    "domain_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."C",
    description text COLLATE pg_catalog."default",
    CONSTRAINT domeinen_pkey PRIMARY KEY ("domain_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.domain
    OWNER to cityinfluencer;
INSERT INTO public.domain(
	name, description)
	VALUES ( 'Mode', 'Kleding en actuele mode'),
	('Natuur', 'Planten huisplanten zowel tuin en bos planten en ecologie projecten'),
	( 'Verkeer', 'Campagnes omtrend mobilisatie en zichtbaarheid in het verkeer'),
	( 'Voeding', 'Campagnes over locaal winkelen en het bereiden van voedsel'),
	('Sport','Campagnes omtrend sporten en engageren voor lokaale sport clubs');





--CAMPAIGN
CREATE TABLE IF NOT EXISTS public.campaign
(
    "campaign_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "start_date" date,
    "end_date" date,
    "employee_id" integer NOT NULL,
    "location_id" integer NOT NULL,
    name text COLLATE pg_catalog."C" NOT NULL,
    description text COLLATE pg_catalog."default",
    "foto_url" text COLLATE pg_catalog."default",
    "status_id" integer NOT NULL,
    "domain_id" integer NOT NULL,
    "social_media_platform_id" integer NOT NULL,

    CONSTRAINT campagne_pkey PRIMARY KEY ("campaign_id"),
    CONSTRAINT "employee_id_fk" FOREIGN KEY ("employee_id")
        REFERENCES public.employee ("employee_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "location_id_fk" FOREIGN KEY ("location_id")
        REFERENCES public.location ("location_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "status_id_fk" FOREIGN KEY ("status_id")
        REFERENCES public.campaign_status ("status_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "domain_id_fk" FOREIGN KEY ("domain_id")
        REFERENCES public.domain ("domain_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "social_media_platform_id_fk" FOREIGN KEY ("social_media_platform_id")
    REFERENCES public.social_media_platform ("social_media_platform_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.campaign
    owner to cityinfluencer;
INSERT INTO public.campaign(
	"start_date", "end_date", "employee_id", "location_id", name, description, "foto_url", "status_id", "domain_id", "social_media_platform_id")
	VALUES ( '01/01/2022', '01/02/2022', 1, 1, 'Veilig in het verkeer', 'Leerlingen aanzetten om veilig met de fiets naar school te gaan', '/img/picture.jpg', 1, 1, 1),
		   ( '01/01/2022', '02/02/2022', 2, 2, 'Tournée Minérale', 'Mensen aanzetten om een maand geen alcohol te drinken', '/img/picture.jpg', 2, 2, 2),
		   ( '12/02/2022', '12/03/2022', 3, 3, 'Een frisse neus halen', 'De nieuwe finse pisten in het bos in de kijker zetten', '/img/picture.jpg', 4, 3, 3),
		   ( '11/01/2022', '11/02/2022', 4, 4, 'Strak in het pak', 'Creatieve carnavalkledij promoten naar aanloop van de carnavalstoet', '/img/picture.jpg', 3, 4 , 4),
           ( '10/01/2022', '10/02/2022', 5, 5, 'De kroegen in de kijker', 'De kroegen in de kijker zetten', '/img/picture.jpg', 4, 4, 2),
		   ( '06/01/2022', '06/02/2022', 5, 5, 'Culinaire uitjes', 'Het foodtruckfestival promoten', '/img/picture.jpg', 2, 3, 1);





--SUBMISSION STATUS
CREATE TABLE IF NOT EXISTS public.submission_status
(
    "status_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT submission_status_pkey PRIMARY KEY ("status_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.submission_status
    owner to cityinfluencer;
INSERT INTO public.submission_status(
	 name)
	VALUES ( 'Beschikbaar'),
	 ( 'Ingezonden'),
	 ( 'Goedgekeurd'),
	 ( 'Afgekeurd');



	
--INFLUENCER
CREATE TABLE IF NOT EXISTS public."influencer"
(
    "influencer_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "user_id" integer NOT NULL,
    "picture_url" text,
    gender "char",
    CONSTRAINT "influencer _pkey" PRIMARY KEY ("influencer_id")
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."influencer"
    owner to cityinfluencer;
INSERT INTO public."influencer"(
     "user_id", gender)
    VALUES ( 6, 'M'),
    ( 7, 'V'),
    ( 8, 'V'),
    ( 9, 'M'),
    ( 10, 'V');




--SUBMISSION
CREATE TABLE IF NOT EXISTS public.submission
(
    "submission_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "influencer_id" integer NOT NULL,
    "campaign_id" integer NOT NULL,
    url text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    "status_id" integer NOT NULL,
    CONSTRAINT submission_pkey PRIMARY KEY ("submission_id"),
    CONSTRAINT "campaign_id_fk" FOREIGN KEY ("campaign_id")
        REFERENCES public.campaign ("campaign_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "influencer_id_fk" FOREIGN KEY ("influencer_id")
        REFERENCES public."influencer" ("influencer_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "status_id_fk" FOREIGN KEY ("status_id")
        REFERENCES public.submission_status ("status_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.submission
    owner to cityinfluencer;
INSERT INTO public.submission(
	"influencer_id", "campaign_id", url, description, "status_id")
	VALUES ( 1, 1, 'https://www.instagram.com/p/CY3ttSlD9Pv/', 'Met een fluohesje zien bestuurders je van ver komen!', 2),
	       ( 2, 2, 'https://www.instagram.com/p/CYtS6zfj4gT/', 'Daag je maten uit om aan een maand zonder alcohol te doen!', 3),
		   ( 3, 3, 'https://www.instagram.com/p/CYo1fPvuogZ/', 'Bewegen? Dat kan hier gewoon bij ons in het bos.', 3),
		   ( 4, 4, 'https://www.instagram.com/p/CXoP0AwjQi6/', 'Snoepjes rapen maar! Het is weer bijna tijd voor de jaarlijkse carnavalsstoet.', 4),
		   ( 5, 5, 'https://www.instagram.com/p/CXoP0AwjQi6/', 'Wist je dat je zondag de lekkerste hapjes op het marktplein kunt vinden?.', 2);





--SOCIAL MEDIA ACCOUNT
CREATE TABLE IF NOT EXISTS public."social_media_account"
(
    "social_media_account_id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "name" text COLLATE pg_catalog."C" NOT NULL,
    url text COLLATE pg_catalog."default" NOT NULL,
    "influencer_id" integer NOT NULL,
    "social_media_platform_id" integer NOT NULL,
    CONSTRAINT "social_media_account_pkey" PRIMARY KEY ("social_media_account_id"),
    CONSTRAINT "influencer_id_fk" FOREIGN KEY ("influencer_id")
        REFERENCES public."influencer" ("influencer_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "social_media_platform_id_fk" FOREIGN KEY ("social_media_platform_id")
        REFERENCES public."social_media_platform" ("social_media_platform_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public."social_media_account"
    owner to cityinfluencer;
INSERT INTO public."social_media_account"(
	 "name", url, "influencer_id", "social_media_platform_id")
	VALUES ( 'WitseMeeussen', 'https://twitter.com/WitseMeeussen', 1, 1),
	( 'WitseMeeussen', 'https://twitter.com/WitseMeeussen', 2, 1),
	( 'WitseMeeussen', 'https://twitter.com/WitseMeeussen', 3, 1),
	( 'WitseMeeussen', 'https://twitter.com/WitseMeeussen', 4, 1),
	( 'WitseMeeussen', 'https://twitter.com/WitseMeeussen', 5, 1);







--INFLUENCER DOMAIN
CREATE TABLE IF NOT EXISTS public.influencer_domain
(
    "influencer_id" integer NOT NULL,
    "domain_id" integer NOT NULL,
    CONSTRAINT influencer_domein_pkey PRIMARY KEY ("domain_id", "influencer_id"),
    CONSTRAINT "domeinId_fk" FOREIGN KEY ("domain_id")
        REFERENCES public.domain ("domain_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "influencer_id_fk" FOREIGN KEY ("influencer_id")
        REFERENCES public."influencer" ("influencer_id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.influencer_domain
    owner to cityinfluencer;
INSERT INTO public.influencer_domain(
	"influencer_id", "domain_id")
	VALUES (1, 1),(1, 5),(2, 3),(3, 2),(3, 4),(4, 2),(4, 4),(4, 5),(5, 1);
