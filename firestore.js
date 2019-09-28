import {db} from '././firebase';
const saveArtistFav = async ({name, isFav}) => {
  await db
    .collection ('artists-fav')
    .doc (name)
    .set ({
      name,
      isFav,
    })
    .then (function () {
      console.log ('Document successfully written!');
    })
    .catch (function (error) {
      console.error ('Error writing document: ', error);
    });
};

const getArtistsFav = async () => {
  return await db
    .collection ('artists-fav')
    .get ()
    .then (function (querySnapshot) {
      let data = [];
      querySnapshot.forEach (function (doc) {
        // doc.data() is never undefined for query doc snapshots
        data.push (doc.data ());
      });
      return data;
    });
};
export {saveArtistFav, getArtistsFav};
