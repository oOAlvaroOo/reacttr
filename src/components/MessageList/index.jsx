import React, { PropTypes } from 'react'

import styles from './message-list.css'
import Message from '../Message'

const propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object).isRequired,
	onRetweet: PropTypes.func.isRequired,
	onFavorite: PropTypes.func.isRequired,
	onReplyTweet: PropTypes.func.isRequired
}

function MessageList({ messages, onRetweet, onFavorite, onReplyTweet }) {

		return(
				<div className={styles.root}>
					{messages.map((msg, key) => {
						return (
							<Message
								key={msg.id}
								text={msg.text}
								picture={msg.picture}
								displayName={msg.displayName}
								username={msg.username}
								date={msg.date}
								numRetweets={msg.retweets}
								numFavorites={msg.favorites}
								onRetweet={() => onRetweet(msg.id)}
								onFavorite={() => onFavorite(msg.id)}
								onReplyTweet={() => onReplyTweet(msg.id)}
							/>
							)
					}).reverse()}
				</div>
			)
}

MessageList.propTypes = propTypes

export default MessageList 