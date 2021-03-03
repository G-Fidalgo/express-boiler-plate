/**
 *  Se invoca al logger con un mensaje de tipo error
 *
 *  Se genera un payload que contiene un mensaje y un tipo de error
 *      En caso de no incluir status code se pone auto un 500
 *
 *  Se envía una response con el código de error
 *
 *  Se envía una respuesta con el payload
 *      statuscode: ....
 *      message: .....
 *
 *  Se cierra la respuesta
 */
