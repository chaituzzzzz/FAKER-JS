/**
 *
 * @namespace faker.departments
 */
var Departments = function (faker) {
  var self = this;

  /**
   * engineering
   *
   * @method faker.departments.engineering
   */
  self.engineering = function() {
      return faker.random.arrayElement(faker.definitions.departments.engineering);
  }; 

  /**
   * semester
   *
   * @method faker.departments.semester
   */
  self.semester = function() {
      return faker.random.arrayElement(faker.definitions.departments.semester);
  };

  /**
   * productName
   *
   * @method faker.departments.productNa
   
  self.productName = function() {
      return faker.commerce.productAdjective() + " " +
              faker.commerce.productMaterial() + " " +
              faker.commerce.product();
  };

  /**
   * price
   *
   * @method faker.commerce.price
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   
  self.price = function(min, max, dec, symbol) {
      min = min || 1;
      max = max || 1000;
      dec = dec === undefined ? 2 : dec;
      symbol = symbol || '';

      if (min < 0 || max < 0) {
          return symbol + 0.00;
      }

      var randValue = faker.random.number({ max: max, min: min });

      return symbol + (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
  };

  /*
  self.categories = function(num) {
      var categories = [];

      do {
          var category = faker.random.arrayElement(faker.definitions.commerce.department);
          if(categories.indexOf(category) === -1) {
              categories.push(category);
          }
      } while(categories.length < num);

      return categories;
  };

  */
  /*
  self.mergeCategories = function(categories) {
      var separator = faker.definitions.separator || " &";
      // TODO: find undefined here
      categories = categories || faker.definitions.commerce.categories;
      var commaSeparated = categories.slice(0, -1).join(', ');

      return [commaSeparated, categories[categories.length - 1]].join(separator + " ");
  };
  */

  /**
   * productAdjective
   *
   * @method faker.departments.head
   */
  self.head = function() {
      return faker.random.arrayElement(faker.definitions.departments.head);
  };

  /**
   * productMaterial
   *
   * @method faker.departments.division
   */
  self.division = function() {
      return faker.random.arrayElement(faker.definitions.departments.division);
  };

  /**
   * product
   *
   * @method faker.
   
  self.product = function() {
      return faker.random.arrayElement(faker.definitions.commerce.product_name.product);
  }; */

  return self;
};

module['exports'] = Departments;
