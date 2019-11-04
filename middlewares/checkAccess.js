module.exports = (req, res, next) => {
    const accessLevel = req.user.access
    if (accessLevel > 5) {
        return res.status(403).send({ error: 'you do not have privileges to this feature'});
    }
    next()
}