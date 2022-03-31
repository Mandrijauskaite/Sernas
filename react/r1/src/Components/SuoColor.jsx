export default function SuoColor({ aukstis, plotis, spalva, numeris, dog }) {

    function randomColor() { //Atsitiktinė spalva https://javascript.plainenglish.io/build-a-random-color-generator-with-javascript-31061a6b99ae
        
        const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
        return `#${randomColor}`;
        
    }

    return (
        <>
            <div style={{
                width: plotis,
                height: aukstis,
                backgroundColor: spalva (randomColor),
                }}> 
                {numeris + 1} {dog}
            </div>
        </>
    )
} 

