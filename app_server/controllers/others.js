/* GET homepage */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'About Loc8r',
      content: 'Looking for the best pizza near you? Loc8r helps you find pizza joints without you having to waste you money to find the good ones. Let Loc8r help you find the place you\'re looking for.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.'
    }
  );
};

module.exports = {
  about
};
