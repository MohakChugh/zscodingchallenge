const graphqlrequest = require('graphql-request');
const GraphQLClient = graphqlrequest.GraphQLClient;

const getsalesdata = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales {
    age
    city
    country
    customer_id
    customer_name
    date_of_birth
    engine_displacementin_cc
    discountin_
    exchange_discountin_lacs
    finance_amountin_lacs
    exchanged
    financed
    financer
    gender
    mrpin_lacs
    order_date
    order_id
    postal_code
    product_id
    product_name
    profitin_lacs
    region
    row_id
    seating_capacity
    ship_date
    state
  }
}
`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const number_of_hachback = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "Hatchback"}}) {
    customer_name
    customer_id
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const number_of_suv = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "SUV"}}) {
    customer_name
    customer_id
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const number_of_sedan = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "Sedan"}}) {
    customer_name
    customer_id
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const mrpsedan = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "Sedan"}}) {
    mrpin_lacs
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const mrpsuv = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "SUV"}}) {
    mrpin_lacs
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

const mrphackback = async () => {
    const client = new GraphQLClient('https://zs-database.herokuapp.com/v1/graphql', {
        headers: {
            'content-type': 'application/json',
        },
    })
    const query = `query MyQuery {
  sales(where: {product_name: {_eq: "Hatchback"}}) {
    mrpin_lacs
  }
}`;
    var result = await client.request(query)
        .then(data => {
            return data;
        })
        .catch((err) => { return err });
    console.log(result);
    return result;
};

exports.getsalesdata = getsalesdata;
exports.number_of_hachback = number_of_hachback
exports.number_of_suv = number_of_suv
exports.number_of_sedan = number_of_sedan
exports.mrphackback = mrphackback
exports.mrpsedan = mrpsedan
exports.mrpsuv = mrpsuv