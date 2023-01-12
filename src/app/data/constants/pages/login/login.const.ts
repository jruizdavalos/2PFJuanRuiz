import { IField } from '../../../interfaces/forms/ifield.metadata';
import { ValidationsService } from '../../../../shared/services/validations/validations.service';
import { ENUM_VALIDATION_OPTIONS } from '../../../enum/validations-options.enum';
import { ERRORS_VALIDATIONS } from '../../errors/errors-validations.const';
import { faFacebookSquare, faInstagram, faInstagramSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { IMAGES_ROUTES } from '../../routes/images.routes';

export const CONST_LOGIN_PAGE: {
  FORM: {
    email: IField;
    password: IField
  };
  ICONS: any[];
  STYLE_BACKGROUND: any;
  LOGO: string

} = {
  FORM: {
    email: {
      val: '',
      error: ERRORS_VALIDATIONS.EMAIL_REQUIRED_FIELD,
      isValid() {
        const validationsService = new ValidationsService();
        const validateEmail = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.EMAIL);
        this.error = validateEmail.msg;
        return validateEmail.isValid
      }
    },
    password: {
      val: '',
      error: ERRORS_VALIDATIONS.PASSWORD_REQUIRED_FIELD,
      isValid() {
        const validationsService = new ValidationsService();
        const validatePassword = validationsService.validateField(this.val, ENUM_VALIDATION_OPTIONS.PASSWORD);
        this.error = validatePassword.msg;
        return validatePassword.isValid
      }
    }
  },
  ICONS: [
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare
  ],
  STYLE_BACKGROUND: {
    backgroundImage: `url(${IMAGES_ROUTES.BACKGROUND_LOGIN})`
  },
  LOGO: IMAGES_ROUTES.LOGO
}