<?php declare(strict_types=1);

namespace Shopware\Core\Migration\V6_5;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

/**
 * @deprecated tag:v6.5.0 - reason:becomes-internal - Migrations will be internal in v6.5.0
 */
class Migration1661505878ChangeDefaultValueOfShippingMethodActiveField extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1661505878;
    }

    public function update(Connection $connection): void
    {
        $sql = 'ALTER TABLE shipping_method ALTER `active` SET DEFAULT 0;';

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
