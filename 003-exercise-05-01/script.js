const styles = {
    width: {width: '16rem'},
    buttonWidth: {width: '60%'}

}

class ProductNavigation extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className='container'>
                    <a className="navbar-brand" href="#">
                        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        THE PTTTO
                    </a>
                </div>
            </nav>
        );
    }
}

class ProductCardComponent extends React.Component{
    render() {
        return (
            <div className="card m-5" style={styles.width}>
                <img src="picture.jpg" className="card-img-top" alt="POTATO" />
                <div className="card-body">
                    <h4 className="card-title text-center">{this.props.name}</h4>
                    <h5 className="card-title text-center">{this.props.price}</h5>
                    <a href="#" className="btn btn-primary text-center d-flex justify-content-center">More info</a>
                </div>
            </div>
        );
    }
}

var ProductList = () => {
    var componentList = products.map((item) => {
        return (
            <ProductCardComponent name={item.name} price={item.price} />
        );
    });
    return <div className="row">{componentList}</div>;
}

const products = [
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"},
    {name: "Potato", price: "1000"}
]

class FullPage extends React.Component {
    render() {
        return(
            <div>
                <ProductNavigation />
                <div className="container">
                    <ProductList />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <FullPage />,
    document.getElementById('root')
);