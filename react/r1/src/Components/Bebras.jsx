// Sukurti komponentą Bebras, kuriame būtų H3 su pavadinimu ir p su tekstu
// Bebras sukurtu klasę, kuri h3 tagą nuspalvina mėlynai ir p tagui uždėti stilių backgroundas juodas, raidės baltos DONE!
// Į Bebras komponentą įdėkit naują komponentą Bebriukas, kuris atvaizduotų raudoną h4 tagą "Bebriukas" DONE!

function Bebras() {
    return (
        <div>
            <div>
                <h4 className="bebriukas">Bebriukas</h4>
            </div>
            <div>
                <h3 className="beb">BEBRAS</h3>
                <p> Žurnalistas pažymėjo, kad jeigu situacija Kremliuje yra būtent tokia, V. Putinas yra suinteresuotas kaip įmanoma greičiau užbaigti karą. Jis prognozuoja, kad per artimiausias dvi tris dienas bus apčiuopiamų pokyčių konflikto išsprendimo link.</p>
            </div>
        </div>
    )
}
export default Bebras;