export function commentEvent( comment ) {
  return {
    type: "COMMENT_EVENT",
    comment: comment.comment,
    eventurl: comment.url
  };
}
