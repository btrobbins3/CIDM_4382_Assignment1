const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'Loc8r - Pizza for the people!',
      pageHeader: {
        title: 'Loc8r',
        strapLine: 'Pizza for the people!'
      },
      sidebar: "Looking for the best pizza near you? Loc8r helps you find pizza joints without you having to waste you money to find the good ones. Let Loc8r help you find the place you're looking for.",
      locations: [
        {
          name: 'Mr. Gatti\'s Pizza',
          address: '4412 S Western St, Amarillo, TX 79109',
          rating: 4,
          facilities: ['Pizza Bar', 'Games', 'Movie Rooms'],
          distance: '25m'
        },
        {
          name: 'Papa John\'s Pizza',
          address: '3415a Bell St Unit A, Amarillo, TX 79109',
          rating: 4,
          facilities: ['Pizza Delivery', 'Fresh Soda'],
          distance: '20m'
        },
        {
          name: 'Domino\'s Pizza',
          address: '301 N 23rd St Ste B, Canyon, TX 79015',
          rating: 5,
          facilities: ['Pizza Delivery', 'Desserts', 'Fresh Soda'],
          distance: '5m'
        }
      ]
    }
  );
};

const locationInfo = (req, res) => {
  res.render('location-info',
    {
      title: 'Starcups',
       pageHeader: {
        title: 'Loc8r',
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: {lat: 51.455041, lng: -0.9690884},
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Simon Holmes',
            rating: 5,
            timestamp: '16 July 2013',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: 'Charlie Chaplin',
            rating: 3,
            timestamp: '16 June 2013',
            reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
          }
        ]
      }
    }
  );
};

const addReview = (req, res) => {
  res.render('location-review-form',
    {
      title: 'Review Starcups on Loc8r' ,
      pageHeader: { title: 'Review Starcups' }
    }
  );
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
