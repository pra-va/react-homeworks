

class MyButton extends React.Component {
    render() {
        return (
            <button onClick={buttonClicked} className="btn btn-info">Press me</button>
        )
    }
}

const buttonClicked = () => console.log("Button pressed!");

class NameComponent extends React.Component {
    render() {
        return (
            <div className="border border-primary rounded m-3 p-3">
                <h1>{this.props.firstName}</h1>
                <h1>{this.props.lastName}</h1>
                <MyButton />
            </div>
        )
    }
}

NameComponent.propTypes = {
    firstName: React.PropTypes.number.isRequired,
    lastName: React.PropTypes.string.isRequired
}


class HelloComponentsCombined extends React.Component {
    render() {
        return (
            <div className="container">
                <NameComponent firstName={this.props.fName1} lastName={this.props.lName1} />
                <NameComponent firstName={this.props.fName2} lastName={this.props.lName2} />
            </div>
        )
    }
}

ReactDOM.render(
    <HelloComponentsCombined fName1="Pranas" fName2="Petras" lName1="Pranaitis" lName2="Petraitis" />,
    document.getElementById('root')
)

