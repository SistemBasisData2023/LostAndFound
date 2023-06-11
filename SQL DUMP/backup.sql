--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: location_submitted_enum; Type: TYPE; Schema: public; Owner: rakhasunu2
--

CREATE TYPE public.location_submitted_enum AS ENUM (
    'FT',
    'FH',
    'FK',
    'FF'
);


ALTER TYPE public.location_submitted_enum OWNER TO rakhasunu2;

--
-- Name: role_enum; Type: TYPE; Schema: public; Owner: rakhasunu2
--

CREATE TYPE public.role_enum AS ENUM (
    'admin',
    'user'
);


ALTER TYPE public.role_enum OWNER TO rakhasunu2;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: founditems; Type: TABLE; Schema: public; Owner: rakhasunu2
--

CREATE TABLE public.founditems (
    found_item_id integer NOT NULL,
    item_name character varying(255) NOT NULL,
    description text,
    location_found character varying(255),
    date_found date,
    location_submitted public.location_submitted_enum,
    user_id integer
);


ALTER TABLE public.founditems OWNER TO rakhasunu2;

--
-- Name: founditems_found_item_id_seq; Type: SEQUENCE; Schema: public; Owner: rakhasunu2
--

CREATE SEQUENCE public.founditems_found_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.founditems_found_item_id_seq OWNER TO rakhasunu2;

--
-- Name: founditems_found_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rakhasunu2
--

ALTER SEQUENCE public.founditems_found_item_id_seq OWNED BY public.founditems.found_item_id;


--
-- Name: lostitems; Type: TABLE; Schema: public; Owner: rakhasunu2
--

CREATE TABLE public.lostitems (
    lost_item_id integer NOT NULL,
    item_name character varying(255) NOT NULL,
    description text,
    location_lost character varying(255),
    date_lost date,
    user_id integer
);


ALTER TABLE public.lostitems OWNER TO rakhasunu2;

--
-- Name: lostitems_lost_item_id_seq; Type: SEQUENCE; Schema: public; Owner: rakhasunu2
--

CREATE SEQUENCE public.lostitems_lost_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lostitems_lost_item_id_seq OWNER TO rakhasunu2;

--
-- Name: lostitems_lost_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rakhasunu2
--

ALTER SEQUENCE public.lostitems_lost_item_id_seq OWNED BY public.lostitems.lost_item_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: rakhasunu2
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role public.role_enum
);


ALTER TABLE public.users OWNER TO rakhasunu2;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: rakhasunu2
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO rakhasunu2;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rakhasunu2
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: founditems found_item_id; Type: DEFAULT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.founditems ALTER COLUMN found_item_id SET DEFAULT nextval('public.founditems_found_item_id_seq'::regclass);


--
-- Name: lostitems lost_item_id; Type: DEFAULT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.lostitems ALTER COLUMN lost_item_id SET DEFAULT nextval('public.lostitems_lost_item_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: founditems; Type: TABLE DATA; Schema: public; Owner: rakhasunu2
--

COPY public.founditems (found_item_id, item_name, description, location_found, date_found, location_submitted, user_id) FROM stdin;
6	Laptop Apel	Ram 32 gb DDR2	\N	\N	\N	\N
7	Test	Test	Test	2023-06-05	FT	8
9	shafa	ditemukan kelaparan	bp3	2023-06-04	FT	4
10	kokoro az	kokoro item baru beli	FT	2023-06-08	FT	2
11	hidayah 	alhamdulillah works	Fpsi	2023-06-09	FT	17
12	KALO INI BISA GAK	hayo tebak	FEB	2023-06-10	FK	16
\.


--
-- Data for Name: lostitems; Type: TABLE DATA; Schema: public; Owner: rakhasunu2
--

COPY public.lostitems (lost_item_id, item_name, description, location_lost, date_lost, user_id) FROM stdin;
9	a	b	c	2023-06-04	\N
12	dsa	sda	sda	2023-06-04	\N
13	sadsa	dsdas	sdads	2023-06-04	\N
14	asd	sad	sda	2023-06-05	4
15	bapakmu	bapakku	bapak kita	2023-06-05	8
16	hai	sda	dsa	2023-06-07	8
17	denden	tinggi	sekitar kutek	2022-12-07	10
18	Benda Berharga	A	B	2018-01-05	8
19	Laptop Baru	I7 Gen 19	ICELL	2023-06-06	11
20	shafa	pendek berkacamata	kantek	2023-06-04	12
21	jamtidur	mau tidur hiks	\N	\N	17
22	testInsertLost	udahbisabelomya	\N	\N	16
23	test123	ini test123	\N	\N	16
24	Bisma Alif Alghifari	Tinggi, rmabut sedikit ikal. berkacacmata, terlahir sebagai lelaki tulen. terakhir terlihat di daerah ujung pandang. bagi yang menemukan silahkan menghubungin 0896894093	\N	\N	9
25	BISA GA HAYO	bisa atuh	\N	\N	16
26	Dio	Kurus	\N	\N	9
27	Azizul woe	tes	harusnya ginih	2023-06-10	9
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rakhasunu2
--

COPY public.users (user_id, username, email, password, role) FROM stdin;
1	admin	admin@example.com	admin123	admin
2	user1	user1@example.com	user123	user
3	user2	user2@example.com	user456	user
4	bintang	a@a.com	1234	user
5	bintang	a@a.com	1234	user
6	bintang	a@a.com	1234	user
7	bintang	a@a.com	1234	user
8	dio	a@a.com	1234	user
9	denise	a@a.com	1234	user
10	rafie	a@gmail.com	123	user
11	Fayza	fay@a.c	1234	user
12	rianraffi	a@a.com	1234cx.'	user
15	esbedee	esbede@gmail.com	esbede123	user
16	iniuname	hahaha@gmail.com	inipass123	user
17	nilaibagus	finpro@sbd.com	bangfnbaik	user
18	1234	bintangmarsyuma@gmail.com	1234	user
\.


--
-- Name: founditems_found_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rakhasunu2
--

SELECT pg_catalog.setval('public.founditems_found_item_id_seq', 12, true);


--
-- Name: lostitems_lost_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rakhasunu2
--

SELECT pg_catalog.setval('public.lostitems_lost_item_id_seq', 27, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rakhasunu2
--

SELECT pg_catalog.setval('public.users_user_id_seq', 18, true);


--
-- Name: founditems founditems_pkey; Type: CONSTRAINT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.founditems
    ADD CONSTRAINT founditems_pkey PRIMARY KEY (found_item_id);


--
-- Name: lostitems lostitems_pkey; Type: CONSTRAINT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.lostitems
    ADD CONSTRAINT lostitems_pkey PRIMARY KEY (lost_item_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: founditems founditems_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.founditems
    ADD CONSTRAINT founditems_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: lostitems lostitems_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rakhasunu2
--

ALTER TABLE ONLY public.lostitems
    ADD CONSTRAINT lostitems_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

