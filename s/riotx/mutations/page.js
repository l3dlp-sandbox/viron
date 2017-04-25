import constants from '../../core/constants';
import swagger from '../../swagger'

export default {
  show: function (context, obj) {
    const schema = obj.model.responses[200].schema;
    // const properties = schema.properties;
    const response = obj.response;

    let merge = swagger.mergePropertiesAndResponse(schema, response);

    context.state.page = {
      data: merge,
    };

    return [constants.CHANGE_PAGE];
  },
};
