import React from 'react'

class LikeButton extends React.Component { 

    constructor() {
        super()
        this.state = {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState ({
            liked: !this.state.liked
        })
    }

    render() {
        let label = this.state.liked ? "♥" : "♡";
        return ( 
        <button className="like-button" onClick={this.handleClick} id={this.props.recipeId}>{label}</button>
        )
    }
}

export default LikeButton;