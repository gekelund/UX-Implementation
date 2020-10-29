    
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
    
export const createOrder = (userId, db, state, updateState, history, firebase) => {
    
    let docRef = db.collection("users").doc(userId);
    
    docRef.get().then(async function(doc) {
        console.log(doc.exists)
        if(doc.exists) {
            const { id } = await db.collection('orders').add(state);
            updateState({orderId: id});
            

            await db.doc(`users/${userId}`).update({
            orders: firebase.firestore.FieldValue.arrayUnion(id),
        });
        return history.push(`/wizard/`); 
        } else {
            const { id } = await db.collection('orders').add(state);
            updateState({orderId: id});
            updateState({discount: true});
            console.log("not existing")
            await db.doc(`users/${userId}`).set({
            orders: firebase.firestore.FieldValue.arrayUnion(id),
        });
        return history.push(`/wizard/`); 
        }
    } )
}
 