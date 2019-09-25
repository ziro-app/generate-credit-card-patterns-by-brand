const promisify = require('util').promisify
const appendFile = require('fs').appendFile
const unlink = require('fs').unlink
/* make filesystem functions support promises instead of callbacks */
const append = promisify(appendFile)
const remove = promisify(unlink)

const createFile = async brands => {
	try {
		/* remove any existing file named 'brands.js' */
		await remove('./brands.js')
		/* save the brands object to 'brands.js' */
		await append('./brands.js', JSON.stringify({ brands }, null, 2))
		console.log('brands.js file created successfully')
	} catch (error) {
		if (error.code === 'ENOENT') {
			console.log('File does not exist. Remove action failed.')
			console.log('Creating new file...')
			try {
				await append('./brands.js', JSON.stringify({ brands }, null, 2))
				console.log('brands.js file created successfully')
			} catch (error) console.log(error)
		} else console.log(error)
	}
}

module.exports = createFile