define('workmanw-wildcard-routing/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('workmanw-wildcard-routing/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'workmanw-wildcard-routing/tests/helpers/start-app', 'workmanw-wildcard-routing/tests/helpers/destroy-app'], function (exports, _qunit, _workmanwWildcardRoutingTestsHelpersStartApp, _workmanwWildcardRoutingTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _workmanwWildcardRoutingTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _workmanwWildcardRoutingTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('workmanw-wildcard-routing/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/helpers/resolver', ['exports', 'workmanw-wildcard-routing/resolver', 'workmanw-wildcard-routing/config/environment'], function (exports, _workmanwWildcardRoutingResolver, _workmanwWildcardRoutingConfigEnvironment) {

  var resolver = _workmanwWildcardRoutingResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _workmanwWildcardRoutingConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _workmanwWildcardRoutingConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('workmanw-wildcard-routing/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/helpers/start-app', ['exports', 'ember', 'workmanw-wildcard-routing/app', 'workmanw-wildcard-routing/config/environment'], function (exports, _ember, _workmanwWildcardRoutingApp, _workmanwWildcardRoutingConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _workmanwWildcardRoutingConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _workmanwWildcardRoutingApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('workmanw-wildcard-routing/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/routes/room.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/routes/wall.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wall.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wall.js should pass jshint.');
  });
});
define('workmanw-wildcard-routing/tests/test-helper', ['exports', 'workmanw-wildcard-routing/tests/helpers/resolver', 'ember-qunit'], function (exports, _workmanwWildcardRoutingTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_workmanwWildcardRoutingTestsHelpersResolver['default']);
});
define('workmanw-wildcard-routing/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('workmanw-wildcard-routing/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map