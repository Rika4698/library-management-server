

import { ErrorRequestHandler } from 'express';


const globalErrorHandler: ErrorRequestHandler = (err, req, res, next): void => {
    if (err.name === 'ValidationError') {
        const formattedErrors: Record<string, any> = {};

        for (const key in err.errors) {
            const errorObj = err.errors[key];

            // Copy all properties first
            const props = { ...errorObj.properties };

            // Change properties.message if it's the copies min validation error
            if (key === 'copies' && errorObj.kind === 'min') {
                props.message = 'Copies must be a positive number';
            }

            formattedErrors[key] = {
                message: props.message,
                name: errorObj.name,
                properties: props,
                kind: errorObj.kind,
                path: errorObj.path,
                value: errorObj.value,
            };
        }

        res.status(400).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: err.name,
                errors: formattedErrors,
            },
        });
        return
    }



    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong',
        success: false,
        error: err,
    });
    return;
};

export default globalErrorHandler;
