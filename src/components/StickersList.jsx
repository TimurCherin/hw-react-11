import React, { Component } from "react";
import stickers from './stickers.json'
import { List, ListImg, ListName } from "./StickersList.styled";

export default class StickersList extends Component {
    state = {
        stick: stickers,
    }
    showName = (isShow, id) => {
        this.setState((prevState) => {
            const currentObj = prevState.stick.find((el) => el.id === id)
            const currentIndex = prevState.stick.indexOf(currentObj)
            prevState.stick[currentIndex].isShow = !isShow
            return (prevState)
        })
    }
    render() {
        const { stick } = this.state
        return (
            <>
                <List>
                    {stick.map(({ id, name, src, isShow }) =>
                        <li key={id}>
                            {isShow ? <ListName>{name}</ListName> : <ListName></ListName>}
                            <ListImg onClick={() => this.showName(isShow, id)} src={src} alt="image" />
                        </li>
                    )}
                </List>
            </>
        )
    }
}