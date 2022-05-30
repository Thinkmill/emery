import { Icon } from '../../components/Icon';

export default {
  render: Icon,
  attributes: {
    icon: {
      type: String,
      description: 'Name of the icon being used.',
      required: true,
    },
  },
};
