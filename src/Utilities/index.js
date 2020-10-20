    
export const FilterdSoups = (soups) => {
    const antalNormal = soups.filter(soup => soup.soupe && !soup.special);
    const antalSpecial = soups.filter(soup => soup.soupe && soup.special);
    
    const normalSoups = antalNormal.map(soup => soup.soupe);
    const specialSoupe = antalSpecial.map(soup => soup.soupe);

    const AntalNormalSoups = {};
    const AntalSpecialSoups = {};

    const AntalFunction = (listSoups, listAntal) => {
       return listSoups.forEach(function(i) { listAntal[i] = (listAntal[i]||0) + 1;});
    } 
   
    AntalFunction(normalSoups, AntalNormalSoups);
    AntalFunction(specialSoupe, AntalSpecialSoups);

    const filteredNormalSoups = soups.filter((item, index) => normalSoups.indexOf(item.soupe) === index);
    
    const filteredSpecialSoups = soups.filter((item) => item.special)

    return {
        filteredNormalSoups: filteredNormalSoups,
        filteredSpecialSoups: filteredSpecialSoups,
        AntalSpecialSoups: AntalSpecialSoups,
        AntalNormalSoups: AntalNormalSoups
    }
}
    