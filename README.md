# Könyvek

konyvek adatainak megjelenítése a HTML oldalon.
Táblázatban
Könyváruház

#### Model
mi reprezentálja a program állapotát? - tomb-be / objektumok - KONYV tábla tárolja az aktuálisan kezelendő könyveket
fetch - modellben
innen idnítjuk az aszinkron hívásokat
vissza kell adnia egy tömböt.
#### Controller
adatokat a megfelelő helyre irányítsa
Összeköti a modellt és a view-t
pédányosítja a modellt
példányosítja a viewt
reagál a view kéréseire - pl: törlésre, módosításra, új adat felvitelére
#### View
oldal megjelenítése
konyvAdminView - egy könyv adatai - (táblázat egyetlen sora) - tr-tagekbe bekerülnek az adatok
konyvekAdminView - az összes könyv adatait megjeleníti - táblázat létrehozása a fejléccel

##### Admin Oldal
-  listázni a könyveket
-  új könyv felvitele
-  Könyv adatainak módosítása
-  Könyv törölni
Táblázatos formában

##### Vásárlói oldal
-   listázni
-   kosárba rakni.
DIVEK-ben

##### Kosár
A felhasználó rákattint a kiválasztott termékre - ezzel generál egy új eseményt.
Publikus felület -> View generálja az eseményt
- Controller feliratkozik az eseménykezelőre
- Controller meghívja a modell metódusát
- Modell pedig kosárba teszi a terméket
Feladat: Megjeleníteni a kosár adatait.
Publikus (konyvPulicView) felület - View generálja az eseményt
Controller feliratkozik az eseménykezelőre
Modell ami kezeli a kosarat kosarTomb-be teszi
Kell egy kosár gomb az index.html - megnézzük a kosár tartalmát

Új
KosarModell : Kosár adatait kozelei
KosarController : Kapcsolatot létrehoz a KosarModell és a KosarView között
KosarView - 