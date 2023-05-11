<?php
declare(strict_types=1);
// SPDX-FileCopyrightText: René Rettig <rene.rettig@helheim.cloud>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\VSCodeServerIntegration\AppInfo;

use OCP\AppFramework\App;

class Application extends App {
	public const APP_ID = 'vscodeserverintegration';

	public function __construct() {
		parent::__construct(self::APP_ID);
	}
}
