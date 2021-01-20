db.artists.updateOne(
  { 
    _id: 1,
    'albums.title': 'The Beatles'
  },
  { 
    $push: { 
      'albums.$.ratingCritic': { $each: [10,9] },
      'albums.$.ratingPublic': 10,
    }
  }
);